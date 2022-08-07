<?php

namespace App\Transformer;

use App\Entity\Simulation;
use Doctrine\ORM\EntityManagerInterface;
use League\Fractal\TransformerAbstract;

class SimulationTransformer extends TransformerAbstract
{

  public function transform(Simulation $Simulation): array
  {
    return [
      'id'            => (int) $Simulation->id
    ];
  }
}