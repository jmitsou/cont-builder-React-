import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import JSplash from '../../Assets/jsplash.avif';
import FaButton from '../faCommon/FaButton';


const EventJournal = (props) => {
	return (
		<Container>
			<Splash image={JSplash} style={{
				height: '60vh',
				color: '#black',
			}}>
				<h1 style={{
					textShadow: '1px 2px #f1f1f1'

				}}>Event Journal
				</h1>

			</Splash>
			<FaButton>View Journal Entries</FaButton>
			<FaButton>Create a Chapter</FaButton>
			<FaButton>View Chapters</FaButton>
		</Container>
		
	)
}

export default EventJournal;