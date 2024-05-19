import { useState } from 'react'
import { RootReducer } from '../../Store'
import Button from '../Button'
import { close, remove, clear } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { priceFormat } from '../../components/DishList'

import * as S from './styles'

type CartItem = {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
  quantidade: number
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [emptyCartMessage, setEmptyCartMessage] = useState('')
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })
  const [paymentData, setPaymentData] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: ''
  })
  const [responseMessage, setResponseMessage] = useState('')

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador: number, valorAtual: CartItem) => {
      return (acumulador += valorAtual.preco * valorAtual.quantidade)
    }, 0)
  }

  const handleContinuePurchase = () => {
    if (items.length === 0) {
      setEmptyCartMessage(
        'O carrinho está vazio, por gentileza adicione um item!'
      )
    } else {
      setShowCheckout(true)
      setEmptyCartMessage('')
    }
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
    setShowPayment(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData({
      ...paymentData,
      [name]: value
    })
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPayment(true)
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    const checkoutData = {
      products: items.map((item: CartItem) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: formData.nome,
        address: {
          description: formData.endereco,
          city: formData.cidade,
          zipCode: formData.cep,
          number: parseInt(formData.numero, 10),
          complement: formData.complemento
        }
      },
      payment: {
        card: {
          name: paymentData.nomeCartao,
          number: paymentData.numeroCartao,
          code: parseInt(paymentData.cvv, 10),
          expires: {
            month: parseInt(paymentData.mesVencimento, 10),
            year: parseInt(paymentData.anoVencimento, 10)
          }
        }
      }
    }

    console.log('Dados enviados para o checkout:', checkoutData)

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(checkoutData)
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Erro na resposta da API:', errorText)
        throw new Error('Erro ao processar o pagamento: ' + errorText)
      }

      const result = await response.json()
      console.log('Resposta da API:', result)

      setOrderId(result.orderId || '12345')
      setShowConfirmation(true)
      setResponseMessage('')
    } catch (error) {
      if (error instanceof Error) {
        setResponseMessage(error.message)
      } else {
        setResponseMessage('Ocorreu um erro desconhecido.')
      }
    }
  }

  const handleConclude = () => {
    dispatch(clear())
    dispatch(close())
    setShowCheckout(false)
    setShowPayment(false)
    setShowConfirmation(false)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <div className="container"></div>
      <S.Sidebar>
        {!showCheckout ? (
          <>
            {items.length === 0 ? (
              <p className="EmptyCar">
                O carrinho está vazio,
                <br /> por gentileza adicione um item!
              </p>
            ) : (
              <>
                <ul>
                  {items.map((item: CartItem) => (
                    <S.CardItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{priceFormat(item.preco)}</p>
                        <p>Quantidade: {item.quantidade}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CardItem>
                  ))}
                </ul>
                <S.TotalDish>
                  Valor total <span>{priceFormat(getTotalPrice())}</span>
                </S.TotalDish>
                <S.Center>
                  <Button
                    title="Clique aqui para continuar com a compra"
                    bcolor="vermelhoTexto"
                    onClick={handleContinuePurchase}
                  >
                    Continuar com a Compra
                  </Button>
                </S.Center>
              </>
            )}
            {emptyCartMessage && <p>{emptyCartMessage}</p>}
          </>
        ) : !showPayment ? (
          <S.DeliveryForm>
            <h2>Entrega</h2>
            <form onSubmit={handleAddressSubmit}>
              <label>
                * Quem irá receber:
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <label>
                * Endereço:
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <label>
                * Cidade:
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <S.FormRow>
                <S.FormColumn>
                  <label>
                    * CEP:
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </S.FormColumn>
                <S.FormColumn>
                  <label>
                    * Número:
                    <input
                      className="nHome"
                      type="text"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </S.FormColumn>
              </S.FormRow>
              <label>
                Complemento (Opcional):
                <input
                  className="idF"
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                />
              </label>
              <S.FormButtonGroup>
                <Button
                  title="Continuar com o Pagamento"
                  bcolor="vermelhoTexto"
                  style={{ width: '100%' }}
                >
                  Continuar com o Pagamento
                </Button>
                <Button
                  title="Voltar para o Carrinho"
                  bcolor="vermelhoTexto"
                  onClick={handleBackToCart}
                  style={{ width: '100%' }}
                >
                  Voltar para o Carrinho
                </Button>
              </S.FormButtonGroup>
            </form>
          </S.DeliveryForm>
        ) : !showConfirmation ? (
          <S.PaymentForm>
            <h2>Pagamento - Valor a Pagar {priceFormat(getTotalPrice())}</h2>
            <form onSubmit={handlePayment}>
              <label>
                * Nome no Cartão:
                <input
                  type="text"
                  name="nomeCartao"
                  value={paymentData.nomeCartao}
                  onChange={handlePaymentChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <S.FormRow>
                <S.FormColumn>
                  <label>
                    * Número do Cartão:
                    <input
                      type="text"
                      name="numeroCartao"
                      value={paymentData.numeroCartao}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </S.FormColumn>
                <S.FormColumn>
                  <label>
                    * CVV:
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </S.FormColumn>
              </S.FormRow>
              <S.FormRow>
                <S.FormColumn>
                  <label>
                    * Mês de Vencimento:
                    <input
                      type="text"
                      name="mesVencimento"
                      value={paymentData.mesVencimento}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </S.FormColumn>
                <S.FormColumn>
                  <label>
                    * Ano de Vencimento:
                    <input
                      type="text"
                      name="anoVencimento"
                      value={paymentData.anoVencimento}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </S.FormColumn>
              </S.FormRow>
              <S.FormButtonGroup>
                <Button
                  title="Finalizar Pagamento"
                  bcolor="vermelhoTexto"
                  style={{ width: '100%' }}
                >
                  Finalizar Pagamento
                </Button>
                <Button
                  title="Voltar para a Edição do Endereço"
                  bcolor="vermelhoTexto"
                  onClick={() => setShowPayment(false)}
                  style={{ width: '100%' }}
                >
                  Voltar para a Edição do Endereço
                </Button>
              </S.FormButtonGroup>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </S.PaymentForm>
        ) : (
          <S.ConfirmationMessage>
            <h2>Pedido realizado - {orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              title="Concluir"
              bcolor="vermelhoTexto"
              onClick={handleConclude}
              style={{ width: '100%' }}
            >
              Concluir
            </Button>
          </S.ConfirmationMessage>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
