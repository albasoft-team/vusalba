<?php

namespace Vusalba\VueBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * InputTable
 *
 * @ORM\Table(name="input_table", indexes={@ORM\Index(name="comp_inputtable_id", columns={"composant_id"}), @ORM\Index(name="node_inputtable_id", columns={"node_id"})})
 * @ORM\Entity
 */
class InputTable
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="tags", type="string", length=1000, nullable=true)
     */
    private $tags;

    /**
     * @var float
     *
     * @ORM\Column(name="SuffrageObtenu", type="float", precision=10, scale=0, nullable=true)
     */
    private $suffrageobtenu;

    /**
     * @var float
     *
     * @ORM\Column(name="SuffrageTotal", type="float", precision=10, scale=0, nullable=true)
     */
    private $suffragetotal;

    /**
     * @var float
     *
     * @ORM\Column(name="PourcentageObtenu", type="float", precision=10, scale=0, nullable=true)
     */
    private $pourcentageobtenu;

    /**
     * @var float
     *
     * @ORM\Column(name="NombreRepresentants", type="float", precision=10, scale=0, nullable=true)
     */
    private $nombrerepresentants;

    /**
     * @var \Composant
     *
     * @ORM\ManyToOne(targetEntity="Composant")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="composant_id", referencedColumnName="id")
     * })
     */
    private $composant;

    /**
     * @var \Node
     *
     * @ORM\ManyToOne(targetEntity="Node")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="node_id", referencedColumnName="id")
     * })
     */
    private $node;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set tags
     *
     * @param string $tags
     *
     * @return InputTable
     */
    public function setTags($tags)
    {
        $this->tags = $tags;

        return $this;
    }

    /**
     * Get tags
     *
     * @return string
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Set suffrageobtenu
     *
     * @param float $suffrageobtenu
     *
     * @return InputTable
     */
    public function setSuffrageobtenu($suffrageobtenu)
    {
        $this->suffrageobtenu = $suffrageobtenu;

        return $this;
    }

    /**
     * Get suffrageobtenu
     *
     * @return float
     */
    public function getSuffrageobtenu()
    {
        return $this->suffrageobtenu;
    }

    /**
     * Set suffragetotal
     *
     * @param float $suffragetotal
     *
     * @return InputTable
     */
    public function setSuffragetotal($suffragetotal)
    {
        $this->suffragetotal = $suffragetotal;

        return $this;
    }

    /**
     * Get suffragetotal
     *
     * @return float
     */
    public function getSuffragetotal()
    {
        return $this->suffragetotal;
    }

    /**
     * Set pourcentageobtenu
     *
     * @param float $pourcentageobtenu
     *
     * @return InputTable
     */
    public function setPourcentageobtenu($pourcentageobtenu)
    {
        $this->pourcentageobtenu = $pourcentageobtenu;

        return $this;
    }

    /**
     * Get pourcentageobtenu
     *
     * @return float
     */
    public function getPourcentageobtenu()
    {
        return $this->pourcentageobtenu;
    }

    /**
     * Set nombrerepresentants
     *
     * @param float $nombrerepresentants
     *
     * @return InputTable
     */
    public function setNombrerepresentants($nombrerepresentants)
    {
        $this->nombrerepresentants = $nombrerepresentants;

        return $this;
    }

    /**
     * Get nombrerepresentants
     *
     * @return float
     */
    public function getNombrerepresentants()
    {
        return $this->nombrerepresentants;
    }

    /**
     * Set composant
     *
     * @param \Vusalba\VueBundle\Entity\Composant $composant
     *
     * @return InputTable
     */
    public function setComposant(\Vusalba\VueBundle\Entity\Composant $composant = null)
    {
        $this->composant = $composant;

        return $this;
    }

    /**
     * Get composant
     *
     * @return \Vusalba\VueBundle\Entity\Composant
     */
    public function getComposant()
    {
        return $this->composant;
    }

    /**
     * Set node
     *
     * @param \Vusalba\VueBundle\Entity\Node $node
     *
     * @return InputTable
     */
    public function setNode(\Vusalba\VueBundle\Entity\Node $node = null)
    {
        $this->node = $node;

        return $this;
    }

    /**
     * Get node
     *
     * @return \Vusalba\VueBundle\Entity\Node
     */
    public function getNode()
    {
        return $this->node;
    }
}
