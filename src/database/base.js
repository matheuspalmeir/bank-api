import mongoose from 'mongoose';
import contaSchema from '../database/schemas/contas';

const uri = 'mongodb+srv://matheuspalmeir:Math1105@cluster0.1xe26.mongodb.net/<dbname>?retryWrites=true&w=majority';

class DatabaseConnection {
	constructor() {
		this.init();
		this.connection = null;
		this.conta = null;
	}

	init = async () => {
		this.connection = await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log('Conectado ao mongo');

		const ContaModel = this.connection.model('conta', contaSchema);
		this.conta = new ContaModel();
	};

	finishSession = () => {
		this.connection.close();
	};
}

export default DatabaseConnection;
