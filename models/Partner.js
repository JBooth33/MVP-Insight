const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({

  companyID: {
    type: Number,
    required: true,
    index: { unique: true }
  }, 
  companyName: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  }, 
    primaryContact: {
    type: String,
    required: true,
  },
  companyPhoneNumber: {
    type: Number,
    required: true,
  }, 
  status: {
    type: String,
    default: "Pending",
    required: true,
  }, 
  dateCreated: { 
    type: Date, 
    default: Date.now 
  }
});

// // here's a static method to find the membership given user and social media provider
// // this is only necessary if you want to actually use the membership info to access the social
// // media site's APIs on behalf of the user.
// SocialMediaMembershipSchema.statics.findAccessToken = async function(userId, provider) {
//   const membership = await this.findOne({
//     userId: new mongoose.Types.ObjectId(userId),
//     provider
//   });

//   return membership;
// };

const Partner = mongoose.model("Partner", PartnerSchema);

module.exports = Partner;
