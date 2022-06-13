// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
export default function handler(req, res) {
  
  if (req.method !== 'POST') return res.status(401).json({ message: 'Only POST method supported' });
  
  const { username, password } = req.body;
  
  if (password === ' ' || username === ' ') return res.status(404).json({ message: 'Invalid input' });
  
  if (password !== '123' || username !== 'Sat') return res.status(404).json({ message: 'Username/Password does not match our records' });

  const myToken = sign({user:username},'antra',{expiresIn:'4h'});
 
  const serializedCookie = serialize('web3WalletChecker',myToken,{ 
    maxAge:60*60*4,
    httpOnly:true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== "development",
    path: "/"
  })
  
  res.setHeader("Set-Cookie", serializedCookie);
  res.status(201).json({ message: `Hello ${username}` });
}
