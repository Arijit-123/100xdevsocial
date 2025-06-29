import { Link } from 'lucide-react'
import React from 'react'

const Navbar = () => {

  return (
    <div>
      <h1>Your personal sorted post</h1>
      <div>
        <Link className="h-6 w-6" >feed </Link>
          <Link className="h-6 w-6" >Job Opportunities </Link>
            <Link className="h-6 w-6" >Build in Public </Link>
              <Link className="h-6 w-6" >favourite</Link>
                <Link className="h-6 w-6" >Message</Link>
      </div>
    </div>
  )
}

export default Navbar
