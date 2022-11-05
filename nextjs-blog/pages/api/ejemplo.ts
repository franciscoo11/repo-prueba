import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

 const cosa=(
req: NextApiRequest,
  res: NextApiResponse<Data>
)=> {
    const {sad} = req.query
    console.log(req.method);
    res.status(200).json({ name: 'asdasdasdsa Doe' })
}


export default cosa;