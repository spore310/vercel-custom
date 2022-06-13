import {verify} from 'jsonwebtoken'
import { protectedRoute } from '../../utils/api/protected';
function handler(req, res) {
    if (req.method !== 'GET') return res.status(401).json({ message: 'Only GET method supported' });
   
    const {web3WalletChecker} = req.cookies;
    const user = verify(web3WalletChecker,'antra');
    
    res.status(200).json({...user})
}
export default protectedRoute(handler);