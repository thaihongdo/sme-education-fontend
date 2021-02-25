import React from 'react';

export const Breadcrumb = () => {
	return (
		<div className="nd_options_section nd_options_bg_grey nd_options_border_bottom_1_solid_grey">
			<div className="nd_options_container nd_options_clearfix">
				<div className="nd_options_section nd_options_padding_15 nd_options_box_sizing_border_box">
					<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university">
						Home
					</a>{' '}
					<img
						alt=""
						className="nd_options_margin_left_10 nd_options_margin_right_10"
						width="10"
						height="10"
						src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/breadcrumb/img/icon-next-grey.svg"
					/>{' '}
					<span className="nd_learning_current_breadcrumb">
						Learning Account
					</span>
				</div>
			</div>
		</div>
	);
};
