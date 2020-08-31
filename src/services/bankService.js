class bankService {
  constructor() {
    this.accounts = {}
  }

  //Deposito em conta
  depositeOnAccount = (agencia, conta, valor) => {}

  //saque de conta
  draftFrom = (agencia, conta, valor) => {}

  //Consulta saldo
  getBalance = (agencia, conta) => {}

  //Deletar uma conta
  deleteAccount = (agencia, conta) => {}

  //transferencia de dinheiro entre contas
  transferMoney = (from, to) => {}

  //transferencia de tipo de agencia e conta
  transferToPrivateAccount = () => {}

  //Media de contas de uma agencia
  getAvarageBalanceFromAccount = (agencia) => {}

  //Menores saldos
  getLowestBalances = (qtde) => {}

  //Maiores saldos
  getBiggestBalances = (qtde) => {}
}

export default new GradeController()
