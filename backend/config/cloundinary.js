

const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: 'ds3cpwvtf',
			api_key: '331815388752888',
			api_secret: '_S1gioR211cwyHL0FAkv0oa7Zd4',
		});
	} catch (error) {
		console.log(error);
	}
};
