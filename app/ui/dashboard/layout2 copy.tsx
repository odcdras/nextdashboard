import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Layout2() {
  return (
    <div className='control-pane'>
            <div className='control-section card-control-section horizontal_card_layout'>
                <div className="e-card-resize-container">
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card e-card-horizontal e-product" id="horizontal_phone_product">
                                    <div className="e-card-stacked">
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title"> iPhone X</div>
                                                <div className="e-card-sub-title">Marketed by Apple Inc</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with
                                            support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per
                                            second. It supports Qi-standard wireless charging.
                                        </div>
                                        <div className="e-card-actions" style={{ justifyContent: 'center' }}>
                                            <button className="e-btn e-outline e-primary">
                                                <div className="e-size">64GB </div>
                                            </button>
                                            <button className="e-btn e-outline e-primary">
                                                <div className="e-size">256GB </div>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="./src/card/images/iphone.png" alt="iPhone X" height="415px" style={{ width: '50%' }} />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div id="vertical_Sample">
                                    <div className="e-card e-card-horizontal" id="horizontal_product">
                                        <div className='e-card-stacked'>
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title">Philips Trimmer</div>
                                                </div>
                                            </div>
                                            <div className="e-card-content" style={{ height: '146px' }}>
                                                Philips trimmers are designed to last longer than 4 ordinary trimmers and DuraPower Technology which optimizes power.
                                            </div>
                                        </div>
                                        <img src='./src/card/images/Trimmer.png' alt="Trimmer"/>
                                    </div>
                                    <div className="e-card e-card-horizontal" id="horizontal_product1">
                                        <img src='./src/card/images/Camera.png' style={{ height: '214px' }} alt="Camera"/>
                                        <div className='e-card-stacked'>
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title">Canon 135mm</div>
                                                </div>
                                            </div>
                                            <div className="e-card-content" style={{ height: '146px' }}>
                                                The fastest 135mm telephoto lens in its class. Two UD-glass elements
                                                correct secondary spectrum for outstanding sharpness and color.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='source_link'>Source: &nbsp;
                        <table>
                            <tr>
                                <td>
                                    <a href="https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers" target='_blank'>https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://en.wikipedia.org/wiki/IPhone_X" target='_blank'>https://en.wikipedia.org/wiki/IPhone_X</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://en.wikipedia.org/wiki/Canon_EF_135mm_lens" target='_blank'>https://en.wikipedia.org/wiki/Canon_EF_135mm_lens</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  );
}