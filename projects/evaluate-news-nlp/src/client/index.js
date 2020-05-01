import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
// import { analyzeText } from './js/textAnalyzer'
import { analyzeSentiment } from './js/textAnalyzer'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


console.log(checkForName);

export {
    checkForName,
    handleSubmit,
    analyzeSentiment
}