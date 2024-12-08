import { de } from 'date-fns/locale';
import React from 'react';

function Faq(){
    return(
<section class="faq-section">
<div class="container">
  <div class="row">
                  
                    <div class="col-md-6 offset-md-3">

                        <div class="faq-title text-center pb-3">
                            <h2>FAQs</h2>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="faq" id="accordion">
                            <div class="card">
                                <div class="card-header" id="faqHeading-1">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span class="badge">1</span>How do I register?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div class="card-body">
                                        <p> You can register by clicking on the "Sign Up" link at the top right corner of the homepage. Please provide the information in the form that appears. You can review the terms and conditions, provide your payment mode details and submit the registration information. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-2">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                            <span class="badge">2</span> Can I add more than one delivery address in an account?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Yes, you can add multiple delivery addresses in your bigbasket account. However, remember that all items placed in a single order can only be delivered to one address. If you want different products delivered to different address you need to place them as separate orders.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-3">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                            <span class="badge">3</span>When will I receive my order?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Once you are done selecting your products and click on checkout you will be prompted to select delivery slot. Your order will be delivered to you on the day and slot selected by you. If we are unable to deliver the order during the specified time duration (this sometimes happens due to unforeseen situations).</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-4">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                            <span class="badge">4</span> How can I give feedback on the quality of customer service?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-4" class="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Our customer support team constantly strives to ensure the best shopping experience for all our customers. We would love to hear about your experience with bigbasket. Do write to us at maxsupermarket4@gmail.com in case of positive or negative feedback.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-5">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                            <span class="badge">5</span> What is the meaning of cash on delivery?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-5" class="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                    <div class="card-body">
                                        <p> Cash on delivery means that you can pay for your order at the time of order delivery at your doorstep.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-6">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                            <span class="badge">6</span>Are there any charges for registration?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-6" class="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Cash on delivery means that you can pay for your order at the time of order delivery at your doorstep.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqHeading-7">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                            <span class="badge">7</span> What is Customer Profile
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-7" class="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Once customer register/login is done the customer can view their details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                </section>
    )
}

export default Faq;