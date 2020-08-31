import express from 'express'
import BankService from '../services/bankService.js'

const router = express.Router()

BankService.init()

router.put('/deposito', (req, res) => {
  try {
    const { agencia, conta, valor } = req.body
    const response = BankService.depositeOnAccount(agencia, conta, valor)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.put('/saque', (req, res) => {
  try {
    const { agencia, conta, valor } = req.body
    const response = BankService.draftFrom(agencia, conta, valor)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.get('/saldo', (req, res) => {
  try {
    const { agencia, conta } = req.body
    const response = BankService.getBalance(agencia, conta)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.delete('/remover/conta', (req, res) => {
  try {
    const { agencia, conta } = req.body
    const response = BankService.deleteAccount(agencia, conta)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.put('/transferencia', async (req, res) => {
  try {
    const { from, to } = req.body
    const response = BankService.transferMoney(from, to)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(500).send(error.message)
  }
})

router.put('/transferencia/private', async (req, res) => {
  try {
    const response = BankService.transferToPrivateAccount()
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(500).send(error.message)
  }
})

router.get('/avarage/balance/:agencia', async (req, res) => {
  try {
    const response = BankService.getAvarageBalanceFromAccount(
      req.params.agencia,
    )
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.get('/saldos/menores/:qtde', async (req, res) => {
  try {
    const response = await BankService.getLowestBalances(
      parseInt(req.params.qtde),
    )
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

router.get('/saldos/maiores/:qtde', async (req, res) => {
  try {
    const response = await BankService.getBiggestBalances(
      parseInt(req.params.qtde),
    )
    res.status(200).send(response)
  } catch (error) {
    console.log('Error:', error)
    res.status(404).send(error.message)
  }
})

export default router
