import React from "react"
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2191320

function Newsletter() {
  return (
	  <ConvertKitForm formId={MY_FORM_ID} className="newsletter" namePlaceholder="First name" emailPlaceholder="Email" submitText="Subscribe" stack="false" newTab="true"/>
  )
}
export default Newsletter