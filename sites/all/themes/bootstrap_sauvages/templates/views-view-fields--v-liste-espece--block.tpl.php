<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 *
 * Affiche le nombre d'observations à partir du Web service tela botanica en fonction du numéro taxonique d'eflore de l'espèce.  
 * 
 */
?>
<?php
  $numTaxonFlore = $row->_field_data['nid']['entity']->field_num_taxon_eflore['und'][0]['value'];
?>
<?php foreach ($fields as $id => $field): ?>
  <?php if (!empty($field->separator)): ?>
    <?php print $field->separator; ?>
  <?php endif; ?>

  <?php print $field->wrapper_prefix; ?>
    <?php print $field->label_html; ?>
    <?php print $field->content; ?>
  <?php print $field->wrapper_suffix; ?>
<?php endforeach; ?>
<span class="result" id="<?php print $numTaxonFlore ?>"></span>

<script type="text/javascript">
(function() {
  var numTaxonFlore = jQuery(".query").text();
  if(numTaxonFlore){
    numTaxonFlore.trim();
    numTaxonFlore = numTaxonFlore.replace(/\s+/g, '').toLowerCase();
    var celjson = "sites/all/themes/bootstrap_sauvages/json/cel_taxon_sauvages_"+numTaxonFlore+".json";
    jQuery.getJSON( celjson)
      .done(function( data ) {
        jQuery( "#"+numTaxonFlore).empty();
        jQuery( "#"+numTaxonFlore).append( data );
      })
      .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
      });
    jQuery(".query").empty();
  }
})();
</script>
