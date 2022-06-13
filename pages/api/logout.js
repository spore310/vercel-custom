import { serialize } from "cookie";
import { protectedRoute } from '../../utils/api/protected';
function handler(req, res) {
    if (req.method !== 'DELETE') return res.status(402).json({ message: 'Only Delete method supported' });
    
   
    const reset = serialize('web3WalletChecker', null, {
        maxAge: -1,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== "development",
        path: "/"
    })
    res.setHeader('Set-Cookie', reset);
    res.status(200).json({ message: 'logged out' });
}

export default protectedRoute(handler);