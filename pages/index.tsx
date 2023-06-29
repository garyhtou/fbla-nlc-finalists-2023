import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import type { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css';

import fs from 'fs';

const Home = (props: { files: string[] }) => {
	console.log(props);
	const names: { [key: string]: string } = {
		'024e155c-b7d5-4e3b-b762-7192a2e10831.pdf': 'Parliamentary Procedure',
		'052ad91a-f4a8-4852-bf6a-323cf5f66821.pdf': 'E-business',
		'1eea4723-66fb-4d2b-8364-d1ea19693bed.pdf': 'Community Service Project',
		'2c1b31ac-2e1f-40ac-bcfa-83d47cef5d20.pdf': 'Website Design',
		'3223e68e-9a69-4a14-93bf-1b2dbc587b88.pdf': 'Business Ethics',
		'33102318-8454-42ea-a2a6-b16280719193.pdf': 'Publication Design',
		'3d4ac13f-6bab-4329-b5a7-4de82d3fc2f8.pdf': 'Business Plan',
		'48986438-0f06-47ec-aa65-2cb180a56f5b.pdf': 'American Enterprise Project',
		'4d1934e2-47c2-47ca-aa56-4a101756b947.pdf': 'Digital Video Production',
		'5066c5e6-a36a-4683-9341-84e7e64328b4.pdf':
			'Hospitality & Event Management',
		'6a682ebf-eeda-4008-967c-f591df503e17.pdf':
			'Management Information Systems',
		'6e33f084-cbbe-40c2-9334-71377b929c59.pdf':
			'Introduction to Event Planning',
		'6e9c2a82-4f3c-483f-aabf-55938b766f1f.pdf': 'Business Financial Plan',
		'79c365c1-4690-469e-8e94-e452f3371f21.pdf':
			'Mobile Application Development',
		'7e51f1a6-bef9-4625-824c-b1dbbde3b048.pdf': 'Help Desk',
		'8501c7ec-e308-4001-8d50-31cd7922be75.pdf': 'Public Service Announcement',
		'8ad0dcf7-2b79-4e00-920e-3beb087a54d3.pdf': 'Graphic Design',
		'8b22f53b-49b8-4b1e-9a5d-0e70b0ef27e9.pdf': 'International Business',
		'9373a89f-5f2e-4fea-b8e7-07f09088c2ef.pdf': 'Marketing',
		'9f0dc993-06d1-435e-a2bf-8b39e712244b.pdf': 'Business Management',
		'afcb8393-8ca7-42fe-9a6a-89cd852c825b.pdf': 'Community Service Project',
		'b06dc01d-3d03-4642-9c8b-4d116bcc2bd2.pdf':
			'Computer Game & Simulation Programming',
		'b3ca6ea5-6247-4112-8481-a593764d919f.pdf': 'Broadcast Journalism',
		'b41d5f86-7fbc-4f39-adde-512192ed6600.pdf':
			'Sports & Entertainment Management',
		'bcef6ec0-fd21-4955-9d93-430c085719f0.pdf':
			'Introduction to Public Speaking',
		'bcf2c7e4-ceed-42cb-88d8-3b3d08f15357.pdf': 'Coding & Programming',
		'da2108f3-1a15-42cc-ba00-4eb4bf60013c.pdf': 'Digital Animation',
		'de65b909-1a6d-443f-8d5a-2989dbe5243c.pdf': 'Network Design',
		'e24ccfde-4b45-43f0-a9f0-462bea707bec.pdf':
			'Introduction to Business Presentation',
		'e3469d52-06a5-4ab8-bf13-7a56dd189a8b.pdf': 'Sales Presentation',
		'e63a19fa-b4f6-400c-ab5a-c6008788e629.pdf': 'Future Business Leader',
		'e691645f-8d40-4dcf-b828-6566879f6aef.pdf': 'Job Interview',
		'f0885175-5088-421c-ad65-1c89c25e4728.pdf': 'Entrepreneurship',
		'f69bd05c-86cc-411a-a346-d54835320e84.pdf': 'Impromptu Speaking',
		'f99295fd-754b-49bc-bc61-0a9c464c5745.pdf': 'Banking & Financial Systems',
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>FBLA NLC Finalists</title>
				<meta
					name='description'
					content='FBLA NLC 2023 Finalists (High School)'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>FBLA NLC 2023 Finalists</h1>

				<p className={styles.description}>
					Congratulations to all of the finalists!
				</p>

				<div className={styles.grid}>
					{props.files.map((file) => (
						<a
							href={`/${file}`}
							className={styles.card}
							key={file}
							target='_blank'
						>
							<h2>{names[file] || file}</h2>
						</a>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a href='https://garytou.com' target='_blank' rel='noopener noreferrer'>
					Built by Gary Tou
				</a>
			</footer>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<{
	files: string[];
}> = async () => {
	const files = fs.readdirSync('public');
	return { props: { files } };
};
