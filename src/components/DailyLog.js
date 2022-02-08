import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';
import NavbarTwo from './User/NavbarTwo';

const DailyLog = () => {
  return(
		<main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <Navbarone/>
               <NavbarTwo/>
               <div class="col-md-12">
         
          <div class="ms-panel">
          
            <div class="ms-panel-body">
              	<div>
		<div>
			<button class="btn btn-primary" Style="float:right; margin-top:-12px;">
			
			<i class="fa fa-file-pdf-o"></i> Download PDF
			</button>
			<div Style="min-height: 50vh; margin: 30px 0px 0px;">
				<div>
					<ul Style="padding-left: 0px; padding-bottom: 0px; list-Style-type: none;">
						<li Style="padding-bottom: 35px;">
							<h2 Style="margin-bottom: 0.3em; font-weight: 300;">Fri 21 Jan</h2>
							<div class="lmc-theme-gradient" Style="height: 2px; width: 100%;"></div>
						</li>
						<li>
							<a class="lmc-timeline-link" href="#">
							<div Style="padding-left: 18px;">
								<div Style="position: relative; padding-left: 40px; padding-bottom: 15px; margin: 0px; border-left: 4px solid rgb(221, 221, 221);">
									<div class="lmc-timeline-dot" Style="position: absolute; left: -24px; top: -21px; width: 44px; height: 44px; border: 3px solid rgba(0, 0, 0, 0); border-radius: 24px; background-color: #1f4970; align-items: center;">
										<div class="lmc-dot-icon" Style="background: url(&quot;https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/o6kjuC-MJghPdWfN.png&quot;);"></div>
									</div>
									<div Style="position: relative; top: -25px;">
										<div class="lmc-timeline-date" Style="color: rgb(153, 153, 153); font-size: 12px;">
											18:30 - Angie Ada<span Style="opacity: 0.7;"></span>
										</div>
										<h3 Style="font-weight: 600; font-size: 16px; margin-bottom: 0px; line-height: 22px;">Pad check</h3>
										<div class="lmc-timeline-desc" Style="font-size: 14px; color: rgb(34, 34, 34);">
											Ted's pad was wet when checked (about 58% wet). As a result, her pad was changed
										</div>
									</div>
								</div>
							</div></a>
						</li>
						<li>
							<a class="lmc-timeline-link" href="#">
							<div Style="padding-left: 18px;">
								<div Style="position: relative; padding-left: 40px; padding-bottom: 15px; margin: 0px; border-left: 4px solid rgb(221, 221, 221);">
									<div class="lmc-timeline-dot" Style="position: absolute; left: -24px; top: -21px; width: 44px; height: 44px; border: 3px solid rgba(0, 0, 0, 0); border-radius: 24px; background-color: #1f4970; align-items: center;">
										<div class="lmc-dot-icon" Style="background: url(&quot;https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/o6kjuC-MJghPdWfN.png&quot;);"></div>
									</div>
									<div Style="position: relative; top: -25px;">
										<div class="lmc-timeline-date" Style="color: rgb(153, 153, 153); font-size: 12px;">
											18:30 - Angie Ada<span Style="opacity: 0.7;"></span>
										</div>
										<h3 Style="font-weight: 600; font-size: 16px; margin-bottom: 0px; line-height: 22px;">Pad check</h3>
										<div class="lmc-timeline-desc" Style="font-size: 14px; color: rgb(34, 34, 34);">
											Ted's pad was wet when checked. As a result, her pad was changed
										</div>
									</div>
								</div>
							</div></a>
						</li>
						<li>
							<a class="lmc-timeline-link" href="#">
							<div Style="padding-left: 18px;">
								<div Style="position: relative; padding-left: 40px; padding-bottom: 15px; margin: 0px; border-left: 4px solid rgb(221, 221, 221);">
									<div class="lmc-timeline-dot" Style="position: absolute; left: -24px; top: -21px; width: 44px; height: 44px; border: 3px solid rgba(0, 0, 0, 0); border-radius: 24px; background-color: #1f4970; align-items: center;">
										<div class="lmc-dot-icon" Style="background: url(&quot;https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/o6kjuC-MJghPdWfN.png&quot;);"></div>
									</div>
									<div Style="position: relative; top: -25px;">
										<div class="lmc-timeline-date" Style="color: rgb(153, 153, 153); font-size: 12px;">
											18:25 - Angie Ada<span Style="opacity: 0.7;"></span>
										</div>
										<h3 Style="font-weight: 600; font-size: 16px; margin-bottom: 0px; line-height: 22px;">Pad check</h3>
										<div class="lmc-timeline-desc" Style="font-size: 14px; color: rgb(34, 34, 34);">
											Ted's pad was dry when checked and so wasn't changed
										</div>
									</div>
								</div>
							</div></a>
						</li>
						<li>
							<a class="lmc-timeline-link" href="#">
							<div Style="padding-left: 18px;">
								<div Style="position: relative; padding-left: 40px; padding-bottom: 15px; margin: 0px; border-left: 4px solid rgb(221, 221, 221);">
									<div class="lmc-timeline-dot" Style="position: absolute; left: -24px; top: -21px; width: 44px; height: 44px; border: 3px solid rgba(0, 0, 0, 0); border-radius: 24px; background-color: #1f4970; align-items: center;">
										<div class="lmc-dot-icon" Style="background: url(&quot;https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/o6kjuC-MJghPdWfN.png&quot;);"></div>
									</div>
									<div Style="position: relative; top: -25px;">
										<div class="lmc-timeline-date" Style="color: rgb(153, 153, 153); font-size: 12px;">
											18:24 - Angie Ada<span Style="opacity: 0.7;"></span>
										</div>
										<h3 Style="font-weight: 600; font-size: 16px; margin-bottom: 0px; line-height: 22px;">Pad check</h3>
										<div class="lmc-timeline-desc" Style="font-size: 14px; color: rgb(34, 34, 34);">
											'Pad check' was completed for Ted.
										</div>
									</div>
								</div>
							</div></a>
						</li>
						<li>
							<a class="lmc-timeline-link" href="">
							<div Style="padding-left: 18px;">
								<div Style="position: relative; padding-left: 40px; padding-bottom: 15px; margin: 0px; border-left: 4px solid rgba(0, 0, 0, 0);">
									<div class="lmc-timeline-dot" Style="position: absolute; left: -24px; top: -21px; width: 44px; height: 44px; border: 3px solid rgba(0, 0, 0, 0); border-radius: 24px; background-color: #651f70; align-items: center;">
										<div class="lmc-dot-icon" Style="background: url(&quot;https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/Oi4WmT6-qcsu7slU.png&quot;);"></div>
									</div>
									<div Style="position: relative; top: -25px;">
										<div class="lmc-timeline-date" Style="color: rgb(153, 153, 153); font-size: 12px;">
											18:19 - Angie Ada<span Style="opacity: 0.7;"></span>
										</div>
										<h3 Style="font-weight: 600; font-size: 16px; margin-bottom: 0px; line-height: 22px;">Drink</h3>
										<div class="lmc-timeline-desc" Style="font-size: 14px; color: rgb(34, 34, 34);">
											'Drink' was completed for Ted.
										</div>
									</div>
								</div>
							</div></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
            </div>
          </div>
        </div>
            </div>
            </div>
</main>
  );
};

export default DailyLog;
