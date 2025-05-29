
import React from 'react'

function capitalize(name) {
  const capitalized = name[0].toUpperCase() + name.substring(1);
  return capitalized;
}

export default capitalize