import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


const Diary = () => {
  return(
    <main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <Navbarone/>
               <div class="col-md-12">
               <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                      <li class="breadcrumb-item">
                       <a href="#"><i class="material-icons">home</i> Home</a>
                     </li>
                     <li class="breadcrumb-item active">Diary </li>
                     </ol>
                </nav>
                <div class="ms-panel">
                    <div class="ms-panel-body">
                        <div id="calendarFull" class="fc fc-ltr fc-unthemed">
                            <div class="fc-toolbar"><div class="fc-left">
                                <div class="fc-button-group">
                                    <button type="button" class="fc-agendaDay-button fc-button fc-state-default fc-corner-left fc-state-active">day
                                    </button>
                                    <button type="button" class="fc-agendaWeek-button fc-button fc-state-default fc-corner-right">week
                                    </button>
                                </div>
                            </div>
                            <div class="fc-right">
                                <button type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" disabled="disabled">today
                                </button>
                                <div class="fc-button-group">
                                    <button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left">
                                        <span class="fc-icon fc-icon-left-single-arrow">
                                        </span>
                                    </button>
                                    <button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span class="fc-icon fc-icon-right-single-arrow"></span></button></div></div><div class="fc-center"><h2>February 5 2022</h2></div><div class="fc-clear"></div></div><div class="fc-view-container" Style=""><div class="fc-view fc-agendaDay-view fc-agenda-view" Style=""><table><thead><tr><td class="fc-widget-header"><div class="fc-row fc-widget-header"><table><thead><tr><th class="fc-axis fc-widget-header" Style="width: 43px;"></th><th class="fc-day-header fc-widget-header fc-sat">Saturday</th></tr></thead></table></div></td></tr></thead><tbody><tr><td class="fc-widget-content"><div class="fc-day-grid"><div class="fc-row fc-week fc-widget-content"><div class="fc-bg"><table><tbody><tr><td class="fc-axis fc-widget-content" Style="width: 43px;"><span>all-day</span></td><td class="fc-day fc-widget-content fc-sat fc-today fc-state-highlight" data-date="2022-02-05"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><tbody><tr><td class="fc-axis" Style="width:43px"></td><td></td></tr></tbody></table></div></div></div><div class="fc-time-grid-container fc-scroller" Style="height: 565px;">
                                    <div class="fc-time-grid"><div class="fc-bg"><table><tbody><tr><td class="fc-axis fc-widget-content" Style="width: 43px;"></td><td class="fc-day fc-widget-content fc-sat fc-today fc-state-highlight" data-date="2022-02-05"></td></tr></tbody></table></div><div class="fc-slats"><table><tbody><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>12am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>1am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>2am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>3am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>4am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>5am</span></td>
                                    <td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>6am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>7am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>8am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>9am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>10am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>11am</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>12pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>1pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td>
                                    <td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>2pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>3pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>4pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>5pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>6pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>7pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>8pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>9pm</span></td>
                                    <td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>10pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr><tr><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"><span>11pm</span></td><td class="fc-widget-content"></td></tr><tr class="fc-minor"><td class="fc-axis fc-time fc-widget-content" Style="width: 43px;"></td><td class="fc-widget-content"></td></tr></tbody></table></div>
                                    <div class="fc-content-skeleton"><table><tbody><tr><td class="fc-axis" Style="width:43px"></td><td><div class="fc-event-container"></div></td></tr></tbody></table>
                                    </div></div></div></td></tr></tbody></table></div></div></div>
                    </div>
                </div>
                </div>




            </div>
            </div>
    </main>
  );
};

export default Diary;
