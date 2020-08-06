import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/page'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import GitHubIcon from 'feather-icons/dist/icons/github.svg'
import VictoryIcon from './noun_victory_394398.svg'

const StyledFooter = styled.footer`
	padding: 4rem;
	svg {
		display: inline-block;
		margin-bottom: -8px;
		padding: 0 0.25rem;
	}
	a {
		color: inherit;
	}
`

const P = styled.p`
	text-align: center;
	margin-bottom: 2rem;
`

const Dimmed = styled(P)`
	opacity: 0.75;
	margin-bottom: 0;
`

const StyledVictoryIcon = styled(VictoryIcon)`
	height: 24px;
	width: 24px;
	fill: #fff;
	margin-bottom: -5px;
	opacity: 0.75;
`

const StyledHeartIcon = styled(HeartIcon)`
	color: #f11748;
`

const Attributions = styled.aside`
	margin-top: 4rem;
	margin-bottom: 2rem;
`

const Nav = styled.nav`
	text-transform: uppercase;
	text-align: center;
	a {
		text-decoration: none;
	}
	a + a {
		&:before {
			content: ' · ';
		}
	}
`

export const Footer = ({
	siteMetaData: { gitHubUrl },
}: {
	siteMetaData: SiteMetaData
}) => (
	<StyledFooter>
		<P>
			Made with <StyledHeartIcon /> by Refugees in Moria.
		</P>
		<Attributions>
			<Dimmed>
				<small>
					<StyledVictoryIcon /> icon created by Sergey Demushkin
					<br />
					from the Noun Project.
				</small>
			</Dimmed>
		</Attributions>
		<Nav>
			<a href={withPrefix('/Privacy')}>Privacy</a>
			<a
				href={gitHubUrl}
				target="_blank"
				rel="nofollow noreferrer"
				title="GitHub project for this site"
			>
				<GitHubIcon />
			</a>
		</Nav>
		<Dimmed>
			&copy;2020{' '}
			<a
				href="https://distributeaid.org/"
				target="_blank"
				rel="nofollow noreferrer"
			>
				Distribute Aid
			</a>
			. All rights reserved.
		</Dimmed>
	</StyledFooter>
)
