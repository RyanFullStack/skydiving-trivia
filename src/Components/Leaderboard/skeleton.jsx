import './leaders.css'

function LeaderboardSkeleton() {

    return (
        Array.from({length: 10}).map((_, index) => (
            <tr
              key={index}
              className='silver'
            >
              <td className='td1 skeleton'>
                <div className="leader-name-container"><span id ='leader-position'>{index+1}.</span></div>
              </td>
              <td className='td2 skeleton'>
              </td>
              <td className='td3 skeleton'>
              </td>
            </tr>
          ))
    )
}

export default LeaderboardSkeleton;
