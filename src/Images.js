import React from 'react'
import bag1 from './Assets/bag1.jpg'
import bag2 from './Assets/bag2.jpg'
import bag3 from './Assets/bag3.jpg'
import suit1 from './Assets/suit1.jpg'
import suit2 from './Assets/suit2.jpg'
import shoe1 from './Assets/shoe1.jpg'
import shoe2 from './Assets/shoe2.jpg'
import shoe3 from './Assets/shoe3.jpg'
import shoe4 from './Assets/shoe4.jpg'


// an array of objects to be displayed
function Images() {
const products = [
  {id: 1,
  name: 'bag1',
  price:'ksh.2000',
  image:bag1
  },
  {id: 2,
  name: 'bag2',
  price:'ksh.3000',
  image:bag2
  },
    {id: 3,
  name: 'bag3',
  price:'ksh.1500',
  image:bag3
  },
  {id: 4,
  name: 'suit',
  price:'ksh.10000',
  image:suit1
  },
  {id: 5,
  name: 'shoe1',
  price:'ksh.10000',
  image:shoe1
  },
  {id: 6,
  name: 'shoe2',
  price:'ksh.10000',
  image:shoe2
  },
  {id: 7,
  name: 'shoe3',
  price:'ksh.10000',
  image:shoe3
  },
    {id: 8,
  name: 'shoe4',
  price:'ksh.5000',
  image:shoe4
  },
]

// map every product to show details
const productList = products.map(product => (<article key={product.id} className='productArticle'><img className='productsImg' src={product.image} /><h3>{product.name}</h3><p>{product.price}</p></article>))

  return (
    <div>
      {productList}
    </div>
  )
}

export default Images