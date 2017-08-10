<?php

namespace Vusalba\VueBundle\Constante;


class Constante
{
    const DBNAME = 'vusalba';
    const USER = 'root';
    const PASSWORD = 'root';
    const HOST = 'localhost';
    const ORM_PATH = 'src\Vusalba\VueBundle\Resources\config\doctrine';
    const MAPPING_IMPORT = array(
        'command' => 'doctrine:mapping:import',
        'bundle' => 'VueBundle',
        'mapping-type' => 'annotation',
        '--filter' => 'Inputtable',
        '--force' => true,
        '--no-interaction'
    );
    const MAPPING_CONVERT = array(
        'command' => 'doctrine:mapping:convert',
        'to-type' => 'annotation',
//        'dest-path' => 'C:\wamp64\www\vusalba\src\Vusalba\VueBundle\Entity',
        'dest-path' => '/var/www/vusalba/src/Vusalba/VueBundle/Entity',
        '--filter' => 'Inputtable',
        '--no-interaction'
    );
    const GENERATE_ENTITIES = array(
        'command' => 'doctrine:generate:entities',
        'name' => 'VueBundle:Inputtable',
        '--no-interaction'
    );
    const GENERATE_CRUD = array(
        'command' => 'doctrine:generate:crud',
        '--entity' => 'VueBundle:Inputtable',
        '--format' => 'annotation',
        '--no-interaction',
        '--overwrite',
        '--no-debug',
        '--with-write'
    );
    /**
     * @param $fields
     * @return string
     */
   public static function getCreateQuery($fields) {
       $query = "CREATE TABLE IF NOT EXISTS InputTable( `id` INTEGER NOT NULL AUTO_INCREMENT,
                                  `composant_id` INTEGER NULL ,
                                  `tags` VARCHAR(1000)  NULL ,
                                   $fields,
                                   PRIMARY KEY (`id`),
                                   CONSTRAINT `comp_inputtable_id` FOREIGN KEY (`composant_id`) REFERENCES `composant` (`id`) ON DELETE CASCADE
                                    )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci";
       return $query;
   }

//   public static function insert($champs, $comp) {
//       $query = "INSERT INTO `inputtable`".$champs . " VALUES(".$comp.")";
//   }
}