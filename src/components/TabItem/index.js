import './index.css'

const TabItem = props => {
  const {eachTab, changeTab, isCurrentTab} = props
  const {tabId, displayText} = eachTab

  const onclickTab = () => {
    changeTab(tabId)
  }

  const highlightWidth = isCurrentTab ? 'highlighted-tab' : ''

  return (
    <li className={`each-tab-list-item ${highlightWidth}`}>
      <button
        className={`each-tab-button ${highlightWidth}`}
        type="button"
        onClick={onclickTab}
      >
        {' '}
        {displayText}{' '}
      </button>
    </li>
  )
}

export default TabItem
