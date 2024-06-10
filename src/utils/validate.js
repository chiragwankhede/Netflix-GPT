const checkValidData=(email, password)=>{

    // isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    //this regular expression checks if the given email adheres to a common pattern for email addresses, ensuring it has a valid username

    // const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // validate passwords in JavaScript, enforcing certain criteria for password strength
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );
      //this regular expression checks if the given email adheres to a common pattern for email addresses, ensuring it has a valid username
      const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        // validate passwords in JavaScript, enforcing certain criteria for password strength

    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password"
    return null
}

export default checkValidData;