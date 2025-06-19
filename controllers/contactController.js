//@ Get all contacts
//@ route GET /api/contacts
//@access public

const getContacts = (req,res) => {
    res.status(200).json({
        message:"Get all contacts"
    })
};

//@ Create new contact
//@ route GET /api/contacts
//@access public

const getContact = (req,res) => {
    res.status(200).json({
        message:`Get contact for ${req.params.id}`
    })
};






//@ Create new contact
//@ route POST /api/contacts:id
//@access public

const createContact = (req,res) => {

const {name,email,phone} =req.body;
if(!name||!email||!phone){
    res.status(400);
    
    throw new Error("All Fields are required!!");
    
}    



    res.status(201).json({
        message:"Create Contact"
    })
};



//@ Update contact
//@ route PUT /api/contacts
//@access public

const UpdateContact = (req,res) => {
    res.status(200).json({
        message:`Update contact for ${req.params.id}`
    })
};


//@ Delete contact
//@ route DELETE /api/contacts
//@access public

const deleteContact = (req,res) => {
    res.status(200).json({
        message:`Delete contact for ${req.params.id}`
    })
};




module.exports ={getContacts,createContact,createContact,UpdateContact,deleteContact,getContact}

