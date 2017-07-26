function showCompForm() {
    _get('composant_new','','contentModalComp','minload');
    _showModal('frmCompModal');
}
function showNodeForm() {
    _get('node_new','','contentModalScope','minloadScope');
    _showModal('frmScopeModal');
}
function getPage() {
    _get('composant_list','', 'composant','minloadComp');
}
function showAxeForm() {
    _get('axis_new','','contentModalAxe','minloadAxe');
    _showModal('frmAxeModal');
}
function updateLevel(id) {
    _get('level_edit',id,'contentModalLevel'+id)
    _showModal('frmUpdateLevel'+id);
}
function updateNode(id) {
    _get('node_edit',id,'contentModalNode'+id);
    _showModal('frmUpdateNode'+id);
}
function updates(route,id,contentModal,modalId,loding) {
 _get(route, id, contentModal+id);
    _showModal(modalId + id);
}
function _get(route, id, contentId,lodingId) {
    if(route){
        _empty(contentId);
        _display(lodingId);
        var url = getUrl(route,id);
        $.ajax({
            type: 'GET',
            url: url,
            success: function(response)
            {
                if(response.error == null){
                    _hide(lodingId);
                    _empty(contentId);
                    console.log(contentId);
                    _setHtmlValue(contentId, response.view);
                    // if (_getHtmlValue('editLevel') !== '') {
                    //     $('#idLevel').attr('value', id);
                    // }
                    if (_getHtmlValue('frmAxeModal') !== '')
                    {
                        if (response.axis && response.axis.length == 0) {
                            $('#iscalculated').attr('disabled','disabled');
                        }
                    }
                }
                else showErrorResponse(response, 'flashError')
            },
            error: function(){
                alert('Veuillez ressayer plus tard');
            }
        })
    }
};
function _getComposantAndAxe() {
    _get('composant_list','', 'idComposant');
}
function addComposant() {
    _post('composant_new', 'addComposant', 'frmCompModal', 'loadingComp', 'flashErrorFrom',function () {
        _get('composant_list','', 'composant');
    });

}
function addAxe() {
    _post('axis_new','formAxis', 'frmAxeModal', 'loadingAxe', 'flashErrorFrom', function () {
        _get('axis_lists','','axe');
    });

}
function editLevel(id) {
    _post('level_edit','editLevel','','loadingLevel','flashErrorFrom',function () {
        _get('list_level','','levels','loadinglevel');
    },id)
}
function addScope() {
    _post('node_new', 'ScopeForm', 'frmScopeModal', 'loadingScope', 'flashErrorFrom', function () {
        _get('node_list','','scope');
    });
}
function _post(route, formId,  modal, loading, flashError, callback,id) {
    _show(loading);
    $('.modal-backdrop').attr('id', 'modalClose'+id);
    $('#vusalba_vuebundle_axis_formula').removeAttr('disabled');
    var url = getUrl(route,id);
    if (route) {
        // console.log(_serializeForm(formId));
        $.ajax({
            type: 'POST',
            url : url,
            data : _serializeForm(formId),
            success: function(response)
            {
                console.log(response);
                if(response.error == null){
                    _hide(loading);
                    // On peut exécuter tout ce que l'on veut dans le fn callback
                    $('#' + 'modalClose'+id).removeClass('modal-backdrop fade in');
                    if (_getHtmlValue('frmCompModal') !== '') { $('#close').click();}
                    if (_getHtmlValue('frmAxeModal') !== '') { $('#closeAxe').click();}
                    if (_getHtmlValue('frmScopeModal') !== '') { $('#closeScope').click();}
                    if (_getHtmlValue('frmUpdateLevel'+id) !== '') { $('#' + 'closeLevel'+id).click();}

                    callback();
                }
                else showErrorResponse(response, flashError)
            },
            error: function(response){
                console.log(response);
                // alert('Error : '+ response.error);
            }
        })
    }
}
