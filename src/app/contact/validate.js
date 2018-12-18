export const validate = val => {
  const errors = {}
  const requiredFields = [ 'fullName', 'email', 'subject', 'message' ]
  requiredFields.forEach(field => {
    if (!val[ field ]) {
      errors[ field ] = 'Required';
    }
  })
  if (!val.name) {
    console.log('Full name is required');
    errors.name = 'Required';
  }
  if (!val.subject) {
    console.log('subject is required');
    errors.subject = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
   if (!val.message) {
    console.log('message is required');
    errors.message = 'Required';
  }
  return errors;  
}
