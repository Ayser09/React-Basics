import {Image} from '../ui/elements'

const VideoDetails = ({ isWatched, title , description }) => {
  return (
    <div>
        {isWatched ?
        <Image src="assets/images/yes.png" height={'42px'} alt='ok' />
        :
        <Image src="assets/images/xmark.png" height={'42px'} alt='xmark' />
        }

        <h1>{title}</h1>
        <hr />
        <h3>{description}</h3>
    </div>
    )
}

export default VideoDetails;