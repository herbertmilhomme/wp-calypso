/** @format */

/**
 * External dependencies
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { flowRight } from 'lodash';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';
import Gridicon from 'gridicons';
import classNames from 'classnames';
import qs from 'qs';

/**
 * Internal dependencies
 */
import { recordGoogleEvent as recordGoogleEventAction } from 'state/analytics/actions';
import isRtlSelector from 'state/selectors/is-rtl';

class StatsPeriodNavigation extends PureComponent {
	static propTypes = {
		onPeriodChange: PropTypes.func,
		hidePreviousArrow: PropTypes.bool,
		isRtl: PropTypes.bool,
		queryParams: PropTypes.object,
	};

	static defaultProps = {
		hidePreviousArrow: false,
		isRtl: false,
		queryParams: {},
	};

	handleClickNext = () => {
		this.handleClickArrow( 'next' );
	};

	handleClickPrevious = () => {
		this.handleClickArrow( 'previous' );
	};

	handleClickArrow = arrow => {
		const { date, onPeriodChange, period, recordGoogleEvent } = this.props;
		recordGoogleEvent( 'Stats Period Navigation', `Clicked ${ arrow } ${ period }` );

		if ( onPeriodChange ) {
			onPeriodChange( {
				date,
				direction: arrow,
				period,
			} );
		}
	};

	render() {
		const {
			children,
			date,
			moment,
			period,
			url,
			hidePreviousArrow,
			isRtl,
			queryParams,
		} = this.props;

		const isToday = moment( date ).isSame( moment(), period );
		const previousDay = moment( date )
			.subtract( 1, period )
			.format( 'YYYY-MM-DD' );
		const previousDayQuery = qs.stringify(
			Object.assign( {}, queryParams, { startDate: previousDay } ),
			{ addQueryPrefix: true }
		);
		const nextDay = moment( date )
			.add( 1, period )
			.format( 'YYYY-MM-DD' );
		const nextDayQuery = qs.stringify( Object.assign( {}, queryParams, { startDate: nextDay } ), {
			addQueryPrefix: true,
		} );

		return (
			<div className="stats-period-navigation">
				{
					<a
						className={ classNames( 'stats-period-navigation__previous', {
							'is-disabled': hidePreviousArrow,
						} ) }
						href={ `${ url }${ previousDayQuery }` }
						onClick={ this.handleClickPrevious }
					>
						<Gridicon icon={ isRtl ? 'arrow-right' : 'arrow-left' } size={ 18 } />
					</a>
				}
				<div className="stats-period-navigation__children">{ children }</div>
				{ ! isToday && (
					<a
						className="stats-period-navigation__next"
						href={ `${ url }${ nextDayQuery }` }
						onClick={ this.handleClickNext }
					>
						<Gridicon icon={ isRtl ? 'arrow-left' : 'arrow-right' } size={ 18 } />
					</a>
				) }
				{ isToday && (
					<span className="stats-period-navigation__next is-disabled">
						<Gridicon icon="arrow-right" size={ 18 } />
					</span>
				) }
			</div>
		);
	}
}

const connectComponent = connect(
	state => ( {
		isRtl: isRtlSelector( state ),
	} ),
	{ recordGoogleEvent: recordGoogleEventAction }
);

export default flowRight( connectComponent, localize )( StatsPeriodNavigation );
