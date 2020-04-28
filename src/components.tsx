import * as React from 'react'
import { Gif, Pagination } from './types'


export const PagerView: React.FunctionComponent<{
  onForward: () => void;
  onBackward: () => void;
  pagination: Pagination;
}> = ({onForward, onBackward, pagination }) => {
  return (
    <div>
      { 
        pagination.offset > 0 && 
        <a href="#" onClick={onBackward}>back</a> 
      }
      <p>{`${(pagination.offset / pagination.count) + 1 }/${Math.ceil(pagination.totalCount / pagination.count)}`}</p>
      { pagination.offset + pagination.count < pagination.totalCount && <a href="#" onClick={onForward}>forward</a> }
    </div>
  )
}

export const GifView = ({gif}: {gif: Gif}) => {
  return (
  <div 
    style={
      {
        width: '25%',
        height: 'auto',
        position:'relative'
      }
    }>
      <iframe 
        src={gif.embed_url}
        width="100%" 
        height="100%" 
        frameBorder="0">
      </iframe>
  </div>
  )
}