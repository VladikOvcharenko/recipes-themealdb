import { useNavigate } from 'react-router-dom'

function GoBack() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }
  return (
    <button className="btn" onClick={handleGoBack}>
      go back
    </button>
  )
}

export { GoBack }
