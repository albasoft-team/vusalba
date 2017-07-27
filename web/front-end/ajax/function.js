/** Empty un element  **/
function _empty(s) {
    jQuery(_setSelectorId(s)).empty();
}
/** Serialize a input element **/
function _serializeForm(s){
    return jQuery(_setSelectorId(s)).serialize();
}

/** Show un element id **/
function _show(s) {
    jQuery(_setSelectorId(s)).show();
}
/** Show un element id **/
function _display(s) {
    jQuery(_setSelectorId(s)).show();
}
/** Hide un element  **/
function _hide(s) {
    jQuery(_setSelectorId(s)).hide();
}
/**
 * Permet de récupérer la bonne url à envoyer dans la requête ajax
 * @param route
 * @param id
 * @returns {string|*}
 */
function getUrl(route,id) {
    return id == '' ? Routing.generate(route):Routing.generate(route,{id:id})
}

/** Modifie la valeur d'un element html **/
function _setHtmlValue(s, value) {
    jQuery(_setSelectorId(s)).html(value);
}
/** Affiche les erreurs retourné par une requete AJAX **/
function showErrorResponse(response, flashId){
    $('#flashError').removeAttr('hidden');
    _setHtmlValue(flashId, '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + response.error)
}

/** Show un modal **/
function _showModal(s) {
    jQuery(_setSelectorId(s)).modal("show");
}
function _setSelectorId(s){
    return '#' + s;
}
/** Get value of a html element **/
function _getHtmlValue(s){
    return jQuery(_setSelectorId(s)).html();
}