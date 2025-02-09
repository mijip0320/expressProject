function getMessages (req,res) {
    res.send('<ul><li>HELLO MIJI PARK</li></ul>');
}

function postMesage(req,res) {
    console.log('UPDATING MESSAGES');
}

module.exports = {
    getMessages,
    postMesage
};