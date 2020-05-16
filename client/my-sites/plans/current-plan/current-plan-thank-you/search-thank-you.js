/**
 * External dependencies
 */
import React from 'react';
import { useTranslate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Notice from 'components/notice';
import NoticeAction from 'components/notice/notice-action';
import ThankYou from './thank-you';
import versionCompare from 'lib/version-compare';

function SearchProductThankYou( { jetpackVersion, siteAdminUrl } ) {
	const translate = useTranslate();
	return (
		<ThankYou
			illustration="/calypso/images/illustrations/thankYou.svg"
			showSearchRedirects
			title={ translate( 'Welcome to Jetpack Search!' ) }
		>
			<p>{ translate( 'We are currently indexing your site.' ) }</p>
			<p>
				{ translate(
					'In the meantime, we have configured Jetpack Search on your site — ' +
						'you should try customizing it in your traditional WordPress dashboard.'
				) }
			</p>
			{ jetpackVersion && versionCompare( jetpackVersion, '8.4', '<' ) && (
				<Notice
					status="is-info"
					showDismiss={ false }
					text={ translate(
						'{{b}}Action needed:{{/b}} Please ensure that the Jetpack ' +
							'version is 8.4 or higher.',
						{
							components: {
								b: <strong />,
							},
						}
					) }
				>
					<NoticeAction href={ siteAdminUrl + 'plugins.php' } external>
						{ translate( 'Upgrade' ) }
					</NoticeAction>
				</Notice>
			) }
		</ThankYou>
	);
}

export default SearchProductThankYou;
