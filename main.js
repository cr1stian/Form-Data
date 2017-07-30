var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

/* START HERE */
var fieldInput = document.querySelector("fieldset")

// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){


  // Check your dev tools console for what the items in formData have
  console.log(formData[i])

  // Creating a form input and setting the type and placeholder attributes
if(formData[i].type === "select"){

  let select = document.createElement("select");
    select.label = formData[i].label
    select.id = formData[i].id
    fieldInput.appendChild(select)

  let options = document.createElement("option");
    options.label = "Select Language..."
    options.disabled = true
    options.selected = true
    select.appendChild(options)

    for (x = 0; x <formData[i].options.length; x++){
      let selectOptions = document.createElement("option")
      selectOptions.label = formData[i].options[x].label
      selectOptions.value = formData[i].options[x].value
      select.appendChild(selectOptions)

    }

}

 else if (formData[i].type === "textarea") {
   let textBox = document.createElement("textarea")
   textBox.label = formData[i].label
   textBox.id = formData[i].id
   textBox.placeholder = formData[i].label
   fieldInput.appendChild(textBox)

}









  else{
    let input = document.createElement("input");
    input.type = formData[i].type
    input.placeholder = formData[i].label
    input.id = formData[i].id
    fieldInput.appendChild(input)
}

  // Append to the body. You'll want to append somewhere else


}
