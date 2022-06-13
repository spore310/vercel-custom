import { verify } from 'jsonwebtoken'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export function protectedRoute(handler) {
        
    return (req,res) => {
            if (!req.cookies.web3WalletChecker) return res.status(401).json({ message: 'Not logged in' });
            if(req.cookies.web3WalletChecker){
                //check data source for user
                const user = verify(req.cookies.web3WalletChecker,'antra');
                return handler(req,res);
            }
        }
}