import React from 'react'
import { Tabs } from 'flowbite-react'
import TransactionForm from '../components/TransactionForm'

function Dashboard () {
  if (!localStorage.getItem('username') && localStorage.getItem('username') !== '') window.location.href = '/login'
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-white rounded-t-lg p-8'>
            <Tabs aria-label='Default tabs' style='default' className='px-4'>
                <Tabs.Item actice title="Deposit">
                    <TransactionForm headingMessage={'Deposit Money'} operationName={'Deposit'} self={true}/>
                </Tabs.Item>
                <Tabs.Item actice title="Transfer">
                    <TransactionForm headingMessage={'Transfer to Another Account'} operationName={'Transfer'} self={false}/>
                </Tabs.Item>
                <Tabs.Item actice title="Withdraw">
                    <TransactionForm headingMessage={'Withdraw Money'} operationName={'Withdraw'} self={true}/>
                </Tabs.Item>
            </Tabs>
        </div>
    </div>
  )
}

export default Dashboard
