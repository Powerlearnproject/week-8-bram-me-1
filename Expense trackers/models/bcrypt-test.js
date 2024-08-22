const bcrypt = require('bcryptjs');

async function testHashing() {
  const password = 'testPassword';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Generated Hash:', hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log('Password match:', isMatch);
}

testHashing();
