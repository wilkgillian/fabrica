import mongoose from 'mongoose';

async function createConection(url: string) {
  try {
    await mongoose.connect(url);
    console.log('Conexão bem sucedida');
  } catch (err) {
    console.log(err);
  }
}
export { createConection };
