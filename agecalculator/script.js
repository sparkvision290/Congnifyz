function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (!day || !month || !year) {
      document.getElementById('result').innerText = 'Please fill all fields correctly!';
      return;
    }
  
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
  
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageYears < 0) {
      document.getElementById('result').innerText = 'Invalid Date of Birth';
      return;
    }
  
    document.getElementById('result').innerText = `You are ${ageYears} years, ${ageMonths} months and ${ageDays} days old.`;
  }