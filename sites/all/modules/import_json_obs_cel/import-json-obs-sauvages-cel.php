<?php
  /*Script php lancé par crontab*/
  /*Récupère les observations des 10 plantes emblématiques du projets sauvages dans la région de PACA*/
  /* tableau du numéro taxonomique d'eflore du type de contenu "espèce" de sauvages de paca */
  $array12Plantes = array(7137,699,1203,7069,5641,4224,2751,1234,2710,30034,1837,5537);
  
  foreach($array12Plantes as $nomScieEflore){
    // //$json = file_get_contents("https://www.tela-botanica.org/service:cel:CelWidgetMapPoint/tout?zoom=8&ne=45.12668|7.718706&sw=42.982239|4.230691&projet=sauvages&taxon=$nomScieEflore");
    // $json = file_get_contents("http://api.tela-botanica.org/service:cel:CelWidgetMapPoint/observations?station=43.934827|6.067919&dept=13,83,05,84,04,06&projet=sauvages&num_taxon=$nomScieEflore");
    
    // $json = utf8_encode($json);
    // $nomScieEflore = str_replace(' ', '-', $nomScieEflore);
    // file_put_contents('/home/sauvages/www/sites/all/themes/bootstrap_sauvages/json/cel_taxon_sauvages_'.$nomScieEflore.'.json',$json);

    //Modification web services mai 2015
    $csv = file_get_contents("https://www.tela-botanica.org/service:cel:CelWidgetExport?format=csv&dept=13,83,05,84,04,06&projet=sauvages&colonnes=standard&num_taxon=$nomScieEflore");
    $rows = array_map('str_getcsv', explode("\n", $csv));
    $countRows = count($rows); 
    file_put_contents('/home/sauvages/www/sites/all/themes/bootstrap_sauvages/json/cel_taxon_sauvages_'.$nomScieEflore.'.json',$countRows);
  };

