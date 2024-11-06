import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { RiDeleteBinLine } from 'react-icons/ri'

const TdActions = () => {
  return (
    <div className='td_action-container'>
        <ButtonIcon className='edit-button'><GoPencil /></ButtonIcon>
        <ButtonIcon className='delete-button'> <RiDeleteBinLine /> </ButtonIcon>
    </div>
  )
}

export default TdActions