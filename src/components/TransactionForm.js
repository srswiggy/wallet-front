import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'flowbite-react'
import axios from 'axios'

function TransactionForm ({ headingMessage, operationName, self }) {
  const [amount, setAmount] = useState()
  const [currency, setCurrency] = useState()
  const [receiverUser, setRecieverUser] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleDepositRequest = (amount, currency) => {
    if (amount && currency) {
      axios.put('http://localhost:8080/deposit', {
        amount,
        currency
      }, {
        auth: {
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        }
      }).then((res) => {
        if (res.status === 200) {
          setOpenModal(true)
        }
      })
        .catch((err) => { console.log(err) })
    }
  }
  const handleWithdrawRequest = (amount, currency) => {
    if (amount && currency) {
      axios.put('http://localhost:8080/withdraw', {
        amount,
        currency
      }, {
        auth: {
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        }
      }).then((res) => {
        if (res.status === 200) {
          setOpenModal(true)
        }
      })
        .catch((err) => { console.log(err) })
    }
  }
  const handleTransferRequest = (receiverUser, amount, currency) => {
    if (amount && currency && receiverUser) {
      axios.put('http://localhost:8080/transfer', {
        receiverUsername: receiverUser,
        money: {
          amount,
          currency
        }
      }, {
        auth: {
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        }
      }).then((res) => {
        if (res.status === 200) {
          setOpenModal(true)
        }
      })
        .catch((err) => { console.log(err) })
    }
  }

  const transactionRequest = (amount, currency, receiverUser) => {
    if (operationName === 'Deposit') handleDepositRequest(amount, currency)
    else if (operationName === 'Withdraw') handleWithdrawRequest(amount, currency)
    else handleTransferRequest(receiverUser, amount, currency)
  }

  return (
        <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Transaction Complete</Modal.Header>
            </Modal>
            <h1 className='text-center text-2xl py-4'>{headingMessage}</h1>
            <form className='py-2'>
                { self === false
                  ? <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receiver</label>
                    <input type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Receiver Username" required onChange={(value) => { setRecieverUser(value.target.value) }} defaultValue={''}/>
                </div>
                  : null }
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={'Amount to ' + operationName} required onChange={(value) => { setAmount(value.target.value) }} defaultValue={''}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
                    <input type="text" id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Currency of Money" required onChange={(value) => { setCurrency(value.target.value) }} defaultValue={''}/>
                </div>
                <div className='flex justify-center'>
                    <Button className='px-8' size="lg" onClick={ () => {
                      transactionRequest(amount, currency, receiverUser)
                    }
                    }>Submit</Button>
                </div>
            </form>
        </div>
  )
}

TransactionForm.propTypes = {
  headingMessage: PropTypes.string,
  operationName: PropTypes.string,
  self: PropTypes.bool
}

export default TransactionForm
