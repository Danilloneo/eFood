import { useState } from 'react'
import { RootReducer } from '../../Store'
import Button from '../Button'
import { close, remove } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { priceFormat } from '../../components/DishList'

import {
  Overlay,
  CartContainer,
  Sidebar,
  TotalDish,
  CardItem,
  Center,
  DeliveryForm, // Adicionei o estilo para o formulário de entrega
  FormRow,
  FormColumn,
  FormButtonGroup,
  PaymentForm // Adicionei o estilo para o formulário de pagamento
} from './styles'

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
      ...formData,
      items: items.map((item: CartItem) => ({
        id: item.id,
        quantidade: item.quantidade,
        preco: item.preco
      }))
    }

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
        throw new Error('Erro ao processar o pagamento')
      }

      const result = await response.json()
      setResponseMessage('Pagamento realizado com sucesso!')
    } catch (error) {
      if (error instanceof Error) {
        setResponseMessage(error.message)
      } else {
        setResponseMessage('Ocorreu um erro desconhecido.')
      }
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <div className="container"></div>
      <Sidebar>
        {!showCheckout ? (
          <>
            {items.length === 0 ? (
              <p>O carrinho está vazio, por gentileza adicione um item!</p>
            ) : (
              <>
                <ul>
                  {items.map((item: CartItem) => (
                    <CardItem key={item.id}>
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
                    </CardItem>
                  ))}
                </ul>
                <TotalDish>
                  Valor total <span>{priceFormat(getTotalPrice())}</span>
                </TotalDish>
                <Center>
                  <Button
                    title="Clique aqui para continuar com a compra"
                    bcolor="vermelhoTexto"
                    onClick={handleContinuePurchase}
                  >
                    Continuar com a Compra
                  </Button>
                </Center>
              </>
            )}
            {emptyCartMessage && <p>{emptyCartMessage}</p>}
          </>
        ) : !showPayment ? (
          <DeliveryForm>
            <h2>Entrega</h2>
            <form onSubmit={handleAddressSubmit}>
              <label>
                Quem irá receber:
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
                Endereço:
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
                Cidade:
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <FormRow>
                <FormColumn>
                  <label>
                    CEP:
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </FormColumn>
                <FormColumn>
                  <label>
                    Número:
                    <input
                      type="text"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </FormColumn>
              </FormRow>
              <label>
                Complemento (Opcional):
                <input
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                />
              </label>
              <FormButtonGroup>
                <Button
                  title="Voltar para o Carrinho"
                  bcolor="vermelhoTexto"
                  onClick={handleBackToCart}
                  style={{ width: '100%' }}
                >
                  Voltar para o Carrinho
                </Button>
                <Button
                  title="Continuar com o Pagamento"
                  bcolor="vermelhoTexto"
                  style={{ width: '100%' }}
                >
                  Continuar com o Pagamento
                </Button>
              </FormButtonGroup>
            </form>
          </DeliveryForm>
        ) : (
          <PaymentForm>
            <h3>Pagamento - Valor a Pagar {priceFormat(getTotalPrice())}</h3>
            <form onSubmit={handlePayment}>
              <label>
                Nome no Cartão:
                <input
                  type="text"
                  name="nomeCartao"
                  value={paymentData.nomeCartao}
                  onChange={handlePaymentChange}
                  required
                  style={{ width: '100%' }}
                />
              </label>
              <FormRow>
                <FormColumn>
                  <label>
                    Número do Cartão:
                    <input
                      type="text"
                      name="numeroCartao"
                      value={paymentData.numeroCartao}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </FormColumn>
                <FormColumn>
                  <label>
                    CVV:
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn>
                  <label>
                    Mês de Vencimento:
                    <input
                      type="text"
                      name="mesVencimento"
                      value={paymentData.mesVencimento}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </FormColumn>
                <FormColumn>
                  <label>
                    Ano de Vencimento:
                    <input
                      type="text"
                      name="anoVencimento"
                      value={paymentData.anoVencimento}
                      onChange={handlePaymentChange}
                      required
                    />
                  </label>
                </FormColumn>
              </FormRow>
              <FormButtonGroup>
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
              </FormButtonGroup>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </PaymentForm>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
