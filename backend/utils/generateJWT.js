import jwt from 'jsonwebtoken'

const generateJWT = (res, id, min) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: min + 'm'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: min * 60 * 1000
    })
}




export { generateJWT }