(function mobsandfamiliarsEntityRegistry() {
  StartupEvents.registry("entity_type", (event) => {
    const builder = event
      .create("mobsandfamiliars:mossie", "entityjs:animal")
      .modelResource((entity) => {
        return "mobsandfamiliars:geo/entity/mossiemodel.geo.json";
      })
      .animationResource((entity) => {
        return "mobsandfamiliars:animations/entity/mossie.animation.json";
      })
      .addAnimationController("mossieController", 1, (event) => {
        if (event.entity.hurtTime > 8) {
          event.thenPlay("Scared");
        }

        if (event.isMoving()) {
          event.thenLoop("Move");
        } else {
          event.thenLoop("idle");
        }

        return true;
      });
    builder.isPushable(true);
    builder.sized(0.5, 0.3);
    builder.modelSize(1, 1);
    builder.mobCategory("ambient");
    builder.setDeathSound("minecraft:entity.generic.death");
    builder.canJump(true);
    builder.setWaterSlowDown(0.6);
    builder.isFood([
      "minecraft:moss_block",
      Ingredient.of("minecraft:moss_block"),
    ]);
  });
  //Attributes for the mossies stats.
  EntityJSEvents.createAttributes((event) => {
    event.create("mobsandfamiliars:mossie", (attribute) => {
      attribute.add("minecraft:generic.max_health", 5);
      attribute.add("minecraft:generic.movement_speed", 1);
    });
  });
})();
