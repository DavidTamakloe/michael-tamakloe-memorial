import React from "react";
import PropTypes from "prop-types";
import { Topbar, BannerImage, Footer } from "../../shared-components";

const BiographyPage = () => {
    return (
        <div>
            <Topbar active="biography" />
            <BannerImage />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h3 className="page-heading">BIOGRAPHY</h3>
                            <br />
                        </div>
                        <div className="col-md-7">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis augue vitae leo rhoncus, ac ultrices augue
                                consequat. Mauris mauris purus, scelerisque in orci at, fringilla volutpat libero. Quisque ante nibh, interdum quis
                                fringilla quis, rutrum ac nisi. Etiam sit amet hendrerit mi. Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Pellentesque eu felis dui. Duis eu metus convallis, iaculis nulla vel, dapibus diam.
                                Vestibulum rhoncus pretium sollicitudin. Suspendisse mattis enim nec urna maximus commodo. Ut non posuere justo. In
                                hac habitasse platea dictumst.
                                <br />
                                <br />
                                Maecenas porttitor eget lorem non lacinia. Nulla accumsan nisi eget tempus iaculis. Sed nec congue erat, vitae
                                imperdiet lacus. Nulla viverra facilisis auctor. In libero justo, aliquet nec ex at, luctus sollicitudin augue. Sed
                                nunc risus, auctor mollis eros et, interdum scelerisque justo. Quisque tortor dolor, tempus quis urna non, scelerisque
                                scelerisque metus. Quisque fringilla ac ligula ac vehicula. Duis eu purus vel nunc ornare tristique non a mauris.
                                Praesent fringilla ex augue, sit amet pretium risus pulvinar at. Sed molestie nunc cursus metus dapibus malesuada.
                                Morbi in ligula at magna ultrices faucibus. Praesent posuere consectetur euismod. Duis dui justo, semper sit amet
                                gravida quis, facilisis a urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas.
                                <br />
                                <br />
                                Sed sapien lorem, dapibus in cursus eu, commodo id felis. In luctus, enim sit amet tempor egestas, sapien tortor
                                consequat dui, non bibendum turpis leo sit amet quam. Vestibulum finibus tempus dui in tincidunt. Sed eget ullamcorper
                                ante, quis placerat ante. Suspendisse libero lectus, luctus sit amet risus vitae, dictum vulputate diam.
                                <br />
                                <br />
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tortor leo, consectetur et
                                eros a, pharetra vestibulum orci. Sed consectetur felis lectus. Sed pretium dignissim pellentesque. Cras ut risus
                                porttitor, fermentum diam sit amet, vestibulum massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                <br />
                                <br />
                                Aliquam imperdiet mi eros, sed dignissim libero ornare vitae. Duis sit amet lobortis nulla, vel ultrices justo. Nunc
                                maximus porttitor ipsum sit amet feugiat. Donec venenatis justo eros, vel lobortis lacus dignissim vel. Pellentesque
                                vitae risus leo. Maecenas vitae vestibulum nisi. Aliquam scelerisque vitae est ut vehicula. Fusce iaculis justo
                                tellus, nec pellentesque sapien blandit eu. Aliquam nec massa semper mauris finibus viverra. Proin id pulvinar justo.
                                <br />
                                <br />
                                Sed faucibus sapien tortor, in posuere neque placerat a. Nullam eleifend odio ut velit accumsan, et gravida orci
                                elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eget
                                luctus arcu. Cras eu sem ac ex tincidunt iaculis vel et mauris. Mauris pretium diam eget sem auctor, quis dignissim
                                augue tincidunt. In tincidunt mattis augue vel ullamcorper. Suspendisse sed massa arcu. Nunc vitae vestibulum nibh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

BiographyPage.propTypes = {};

export default BiographyPage;
